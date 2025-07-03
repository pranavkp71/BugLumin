def test_home(client):
    response = client.get("/")
    assert response.status_code == 200
    assert b"Buglumin" in response.data

def test_get_snapshot(client):
    new_snapshot = {
        "code": "print('test')",
        "logs": "no error",
        "metadata": {"os": "Windows", "python_version": "3.10"}
    }
    post_resp = client.post('/snapshots/', json=new_snapshot)
    snapshot_id = post_resp.get_json()['snapshot_id']

    get_resp = client.get(f'/snapshots/{snapshot_id}')
    assert get_resp.status_code == 200
    data = get_resp.get_json()
    assert data["id"] == snapshot_id
    assert "code" in data and data["code"] == "print('test')"