from locust import HttpUser, task

class BlogUser(HttpUser):
    @task
    def hello_world(self):
        self.client.get("/")
