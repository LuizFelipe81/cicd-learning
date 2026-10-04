from django.test import SimpleTestCase


class HealthEndpointTests(SimpleTestCase):
    def test_health_returns_structured_payload(self):
        response = self.client.get("/api/health/")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "ok")
        self.assertEqual(len(data["items"]), 3)
