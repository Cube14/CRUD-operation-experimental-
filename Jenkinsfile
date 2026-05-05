pipeline {
  agent any

  stages {
    stage('Install Backend') {
      steps {
        dir('lab27/backend') {
          script {
            if (isUnix()) {
              sh 'npm ci'
            } else {
              bat 'npm ci'
            }
          }
        }
      }
    }

    stage('Install Frontend') {
      steps {
        dir('lab27/frontend') {
          script {
            if (isUnix()) {
              sh 'npm install --legacy-peer-deps'
            } else {
              bat 'npm install --legacy-peer-deps'
            }
          }
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('lab27/frontend') {
          script {
            if (isUnix()) {
              sh 'npm run build'
            } else {
              bat 'npm run build'
            }
          }
        }
      }
    }

    stage('Docker Compose Build') {
      steps {
        dir('lab27') {
          script {
            if (isUnix()) {
              sh 'docker compose build'
            } else {
              bat 'docker compose build'
            }
          }
        }
      }
    }
  }
}
