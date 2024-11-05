# MLOps Dashboard

The MLOps Dashboard is a web application for managing machine learning workflows, datasets, model training, and monitoring user activity in a streamlined, centralized environment. This tool is designed to assist data scientists, ML engineers, and DevOps teams in maintaining, deploying, and tracking machine learning models efficiently.

![image](https://github.com/user-attachments/assets/bd6011dc-4c1c-46f8-949d-ffd5a4a39be8)


---

## Features

- **Model Management**: Track, update, and version ML models with ease. Monitor model performance and manage lifecycle stages (development, production, etc.).
- **Dataset Management**: Organize and view datasets with metadata for easier selection and management. Track changes in data that impact models.
- **User Activity Tracking**: Monitor user activity, role-based access, and actions taken within the dashboard.

---

## Installation
### Steps
For React UI Application
1. **Clone the Repository**  
   Clone this repository to your local/cloud machine:
   ```bash
   git clone https://github.com/yourusername/mlops_dashboard.git
   cd mlops_dashboard
   ```

2. Create .env file and below variables for backend server call
    SERVER_IP= <SERVER_IP>
    SERVER_PORT = <SERVER_PORT>

2. **Install Dependencies**  
   In the project root directory, install dependencies with:
   ```bash
   npm install
   ```

3. **Run in Development Mode**  
   Start the development server using:
   ```bash
   npm run dev
   ```
   Open [localhost:5173](http://localhost:5173) in your browser to access the dashboard.

   For cloud environment:
   - Fix port by uncomment below in vite.config.js
   server: {  port: 8888,},

   - Start Server
   nohup npm run dev -- --host 0.0.0.0


For Flask SERVER Application,
1. **Clone ML4H Repository**  
    Clone this repository to your local/cloud machine:
    git clone https://github.com/broadinstitute/ml4h.git

2. **Add files**
  - Server_app.sh in folder: /ml4h/scripts/
  - flask_app.py at parent directory

3. **Run Server**
    bash Server_app.sh

   
    ## Technologies Used

    - **React**: Component-based UI library for building user interfaces.
    - **Vite**: Fast, modern frontend build tool for quick development and optimized production builds.
    - **CSS**: For styling and layout.
    - **Flask**: Python-based microservice framework for building backend web applications.
  
   
    # MLOps Dashboard: Scaling model, data and user solution

    This document outlines the strategy to ensure the ECG analysis solution can efficiently handle large datasets while providing a seamless user experience. The approach focuses on leveraging batch processing, resource allocation, model scaling, and effective monitoring.

    ### 1. Handling Larger Volumes of Data

    #### Batch Processing

    To analyze and process large volumes of ECG data (e.g., 10,000 ECGs), implementing batch processing will be beneficial. This can be accomplished using services such as Google Cloud Dataflow or Azure Data Factory.

    - **Data Ingestion**: Develop a managed service to ingest ECG data from various sources (e.g., different file formats) into a centralized storage solution like Google Cloud Storage or Azure Blob Storage.

    - **Batch Jobs**: Schedule batch jobs to process ECG files in groups rather than individually, significantly reducing processing time and resource usage. This can include transforming data, extracting features, and preparing datasets for machine learning models.

    - **Scalability**: Batch processing will allow for horizontal scaling by adding more workers to handle increased loads, ensuring that the system can scale out as more ECGs are ingested.

    ---

    ### 2. Accommodating More Users

    #### Resource Allocation

    As user demand increases, managing resource allocation effectively is crucial:

    - **Autoscaling**: Utilize auto-scaling features provided by Google Kubernetes Engine (GKE) or Azure Kubernetes Service (AKS) to automatically adjust the number of application instances based on user traffic and processing needs. This ensures optimal resource utilization without manual intervention.

    - **Load Balancing**: Implement load balancers to distribute incoming user requests evenly across multiple instances of the application, preventing any single instance from becoming a bottleneck.

    #### Multi-User Access

    To accommodate multiple users effectively:

    - **User Authentication**: Implement user authentication mechanisms (e.g., OAuth, JWT) to ensure that only authorized users can access the ECG analysis platform.

    - **Role-Based Access Control (RBAC)**: Use Google Cloud IAM or Azure RBAC to manage permissions based on user roles, providing different access levels to various features of the application.

    ---

    ### 3. Model Scaling

    #### Custom Container Deployment

    Deploy machine learning models in custom containers on Kubernetes service in a cloud environment:

    - **Containerization**: Create Docker containers for the machine learning models to ensure consistent deployment across environments.

    - **Kubernetes Deployment**: Use Google Kubernetes Engine (GKE) or Azure Kubernetes Service (AKS) to deploy these containers, allowing for easy scaling as Kubernetes can manage multiple replicas of the model serving application.

    #### Vertex AI Endpoints

    For serving models with managed capabilities:

    - **Endpoint Creation**: Use Vertex AI to create endpoints for deploying machine learning models. Vertex AI automatically handles scaling based on incoming prediction requests.

    - **Serving Agents**: Leverage Vertex AI's serving agents to provide seamless and efficient model serving, with capabilities for versioning and traffic management.

    ---

    ### 4. Monitoring and Logging

    To ensure the system operates smoothly and efficiently:

    #### Monitoring

    - **Google Cloud Monitoring or Azure Monitor**: Utilize these tools to track system performance, resource utilization, and user interactions. Set up alerts for critical metrics to proactively manage performance issues.

    - **Model Performance Tracking**: Monitor the performance of machine learning models in production, including response times and prediction accuracy.

    #### Logging

    - **Centralized Logging**: Implement centralized logging solutions such as Google Cloud Logging or Azure Log Analytics to capture logs from all components of the system. This allows for easier troubleshooting and analysis of system behavior.

    - **Audit Logs**: Maintain audit logs to track user activity and system changes, which can be essential for compliance and security.

    ---

    ## Conclusion

    By implementing a scalable architecture that incorporates batch processing, effective resource allocation, model scaling with custom containers, and robust monitoring and logging, the ECG analysis solution can efficiently handle increased data volumes and accommodate a growing number of users. Leveraging cloud-native services on GCP or Azure provides the flexibility and scalability needed to meet future demands.



---

## License

This project is licensed under the MIT License.
