pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/iichsan/CI-CD-TESTING.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Tambahkan perintah build jika diperlukan
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Tambahkan perintah deploy jika diperlukan
            }
        }
    }
    post {
        success {
            echo 'Pipeline finished successfully!'
            emailext subject: 'Build Succeeded', body: 'The build succeeded!',
            recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
        failure {
            echo 'Pipeline failed!'
            emailext subject: 'Build Failed', body: 'The build failed.',
            recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
    }
}
