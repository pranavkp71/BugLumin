import pytest
from app import create_app, db
from flask import json

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'

    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client

def register_and_login(client):
    user_data = {
        "username": "testuser",
        "password": "testpass",
        "first_name": "Test",
        "last_name": "User",
        "email": "test@example.com"
    }
    client.post('/register', json=user_data)
    login_resp = client.post('/login', json={
        "username": "testuser",
        "password": "testpass"
    })
    token = login_resp.get_json()['access_token']
    return token

def test_home(client):
    response = client.get("/")
    assert response.status_code == 200
    assert b"Buglumin" in response.data

def test_get_snapshot(client):
    token = register_and_login(client)

    new_snapshot = {
        "code": "print('test')",
        "logs": "no error",
        "metadata": {"os": "Windows", "python_version": "3.10"}
    }

    post_resp = client.post(
        '/snapshots/',
        json=new_snapshot,
        headers={"Authorization": f"Bearer {token}"}
    )
    assert post_resp.status_code == 201
    snapshot_id = post_resp.get_json()['snapshot_id']

    get_resp = client.get(
        f'/snapshots/{snapshot_id}',
        headers={"Authorization": f"Bearer {token}"}
    )
    assert get_resp.status_code == 200
    data = get_resp.get_json()
    assert data["id"] == snapshot_id
    assert data["code"] == "print('test')"
