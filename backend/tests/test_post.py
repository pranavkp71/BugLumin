import pytest
from app import create_app, db

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'

    with app.app_context():
        db.create_all()
        yield app.test_client()
        db.session.remove()
        db.drop_all()

def test_create_snapshot(client):
    sample_data = {
        "code": "print('Hello Buglumin')",
        "logs": "Everything looks fine",
        "metadata": {
            "python_version": "3.11",
            "os": "Ubuntu"
        }
    }

    response = client.post('/snapshots/', json=sample_data)
    assert response.status_code == 201
    json_data = response.get_json()
    assert 'snapshot_id' in json_data
