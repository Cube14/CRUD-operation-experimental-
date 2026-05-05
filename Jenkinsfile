pipeline {
  agent any

  stages {
    stage('Check Tools') {
      steps {
        echo 'NEW FILE LOADED'

        script {
          if (isUnix()) {
            sh 'docker --version'
            sh 'docker-compose --version'
          } else {
            bat 'docker --version'
            bat 'docker-compose --version'
          }
        }
      }
    }

    stage('Build Docker Images') {
      steps {
        dir('lab27') {
          script {
            if (isUnix()) {
              sh 'docker-compose build'
            } else {
              bat 'docker-compose build'
            }
          }
        }
      }
    }

    stage('Start Containers') {
      steps {
        dir('lab27') {
          script {
            if (isUnix()) {
              sh 'docker-compose up -d'
              sh 'docker-compose ps'
            } else {
              bat 'docker-compose up -d'
              bat 'docker-compose ps'
            }
          }
        }
      }
    }
  }
}