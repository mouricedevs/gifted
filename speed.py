import time
import threading
import requests
from ping3 import ping

# Configuration
SERVER_URL = 'https://gifted-tech-api-users.onrender.com'
TEST_DURATION = 30  # Test duration in seconds
REQUEST_INTERVAL = 0.01  # Time between requests in seconds (10 ms)

def ping_server(url):
    """Ping the server to check if it's reachable."""
    print(f"Pinging server at {url}...")
    response_time = ping(url)
    if response_time:
        print(f"Server is reachable. Response time: {response_time * 1000:.2f} ms")
    else:
        print("Server is not reachable.")

def send_request():
    """Send an HTTP GET request to the server."""
    try:
        response = requests.get(SERVER_URL)
        print(f"Request to {SERVER_URL} returned status code {response.status_code}")
    except requests.RequestException as e:
        print(f"Request failed: {e}")

def run_extreme_stress_test():
    """Run an extreme stress test by sending continuous requests."""
    print(f"Running extreme stress test on {SERVER_URL}...")
    start_time = time.time()
    end_time = start_time + TEST_DURATION

    while time.time() < end_time:
        send_request()
        time.sleep(REQUEST_INTERVAL)  # Small delay between requests to avoid overwhelming the client

if __name__ == "__main__":
    # Initial ping
    ping_server(SERVER_URL)

    # Run extreme stress test
    run_extreme_stress_test()
