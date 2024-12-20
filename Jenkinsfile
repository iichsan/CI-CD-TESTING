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
        stage('Integration Testing') {
            steps {
                echo 'Running integration tests...'
                sh 'npm run integration-test' // Perintah ini disesuaikan dengan cara menjalankan integration test Anda
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Tambahkan perintah build jika diperlukan, misalnya: sh 'npm run build'
            }
        }
        stage('Deploy to Staging') {
            when {
                branch 'main' // Hanya lakukan deploy ke staging jika di branch 'main'
            }
            steps {
                echo 'Deploying to staging server...'
                sshagent(['your-ssh-credentials-id']) { // Pastikan Anda sudah menambahkan kredensial SSH di Jenkins
                    sh 'ssh user@staging-server "cd /path/to/project && git pull && npm install && npm run build"'
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline finished successfully!'
            emailext subject: 'Build Succeeded', body: 'The build succeeded!',
            recipientProviders: [[$class: 'DevelopersRecipientProvider']] // Mengirim email kepada pengembang
        }
        failure {
            echo 'Pipeline failed!'
            emailext subject: 'Build Failed', body: 'The build failed.',
            recipientProviders: [[$class: 'DevelopersRecipientProvider']] // Mengirim email jika build gagal
        }
    }
}
