pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh '''cd ./backend && npm install && cd ../ &&
cd ./frontend && npm install && cd ../'''
      }
    }

    stage('Build projects') {
      steps {
        sh '''cd ./backend && npm run build && cd ../ &&
cd ./frontend && npm run build && cd ../'''
      }
    }

  }
}