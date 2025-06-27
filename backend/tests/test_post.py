import requests

BASE_URL = "http://127.0.0.1:5000"

sample_data = {
    "code": "print('Hello Buglumin)",
    "logs": "No errors found",
    "metadata": {
        "python_version": "3.10.0",
        "os": "Windows 11"
    }
}

response = requests.post(f"{BASE_URL}/snapshots/", json=sample_data)
print(response.status_code)
print(response.json())