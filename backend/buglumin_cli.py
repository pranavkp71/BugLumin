import argparse 
import requests
import json
import os

API_URL = "http://127.0.0.1:5000/snapshots/"

def parse_meta(meta_list):
    meta = {}
    for item in meta_list:
        if '=' in item:
            key, value = item.split('=', 1)
            meta[key.strip().lower()] = value.strip()
    return meta

def push_snapshot(code_file, log_file, meta_list):
    if not os.path.exists(code_file):
        print(f"❌ Code file '{code_file}' not found.")
    
    code = open(code_file).read()

    logs = ""
    if log_file and os.path.exists(log_file):
        logs = open(log_file).read()

    metadata = parse_meta(meta_list)

    payload = {
        "code": code,
        "logs": logs,
        "metadata": metadata
    }

    try:
        resp = requests.post(API_URL, json=payload)
        if resp.status_code == 201:
            print(f"✅ Snapshot created: {resp.json()['snapshot_id']}")
        else:
            print(f"❌ Error: {resp.status_code} {resp.text}")
    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to the Buglumin API. Is the server running?")

def view_snapshot(snapshot_id):
    try:
        resp = requests.get(f"{API_URL}{snapshot_id}")
        if resp.status_code == 200:
            data = resp.json()
            print(f"\n Snapshot ID: {data['id']}")
            print(f"\n Code:\n{data['code']}")
            print(f"\n Logs:\n{data.get('logs', '')}")
            print(f"\n Metadata:\n{json.dumps(data.get('env_metadata', {}), indent=2)}")
            print(f"\n Created At: {data['created_at']}")
        else:
            print(f"❌ Error: {resp.status_code} - {resp.text}")
    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to the Buglumin API.  Is the server running?")

def list_snapshots(filter_list):
    params = {}
    for f in filter_list:
        if '=' in f:
            k, v = f.split('=', 1)
            params[k] = v
        if not filter_list:
            print("No filters applied. Showing recent snapshots.")

    try:
        resp = requests.get(API_URL, params=params)
        if resp.status_code == 200:
            snapshots = resp.json().get("snapshots", [])
            if not snapshots:
                print("No snapshots fount.")
                return
            for snap in snapshots:
                print(f"ID: {snap['id']}")
                print(f"Created: {snap['created_at']}")
                print(f"Metadata: {json.dumps(snap.get('env_metadata', {}))}")
                print("-" * 40)
        else:
            print(f"❌ Error: {resp.status_code} - {resp.text}")
    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to the Buglumin API.  Is the server running?")

def delete_snapshot(snapshot_id):
    try:
        resp = requests.delete(f"{API_URL}{snapshot_id}")
        if resp.status_code == 200:
            print(f"Snapshot {snapshot_id} deleted successfully.")
        elif resp.status_code == 404:
            print("Snapshot not found.")
        else:
            print(f"❌ Error: {resp.status_code} - {resp.text}")
    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to the Buglumin API.  Is the server running?")

def main():
    parser = argparse.ArgumentParser(description="Buglumin CLI - Push debug snapshots")

    subparsers = parser.add_subparsers(dest="command")

    # push command
    push_parser = subparsers.add_parser("push", help="Push a debug snapshot")
    push_parser.add_argument("--code", required=True, help="Path to code file")
    push_parser.add_argument("--log", help="Path to log file (optional)")
    push_parser.add_argument("--meta", nargs="*", default=[], help="Metadata in key=value format")

    # view_command
    view_parser = subparsers.add_parser("view", help="View a snapshot by ID")
    view_parser.add_argument("--id", required=True, help="Snapshot ID to view")

    # list command
    list_parser = subparsers.add_parser("ls", help="List snapshots with optional filters")
    list_parser.add_argument("--filter", nargs="*", default=[], help="Filter by key=value format(e.g., os=windows)")

    # delete_command
    delete_parser = subparsers.add_parser("rm", help="Delete snapshot by ID")
    delete_parser.add_argument("--id", required=True, help="Snapshot ID to delete")

    args = parser.parse_args()

    if args.command == "push":
        push_snapshot(args.code, args.log, args.meta)
    elif args.command == "view":
        view_snapshot(args.id)
    elif args.command == "ls":
        list_snapshots(args.filter)
    elif args.command == "rm":
        delete_snapshot(args.id)
    else:
        parser.print_help()

if __name__ == "__main__":
    main()