pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKER_USERNAME = "hamzabox"
        FRONTEND_IMAGE = "${DOCKER_USERNAME}/AyariHamza-4TWIN2-G1-kaddem-frontend"
        FRONTEND_TAG = "${BUILD_NUMBER}"
        SONAR_PROJECT_KEY = "kaddem-devops-frontend"
    }

    stages {
        stage('Checkout Frontend Code') {
            steps {
                dir('frontend') {
                    git branch: 'pre-prod',
                        url: 'https://github.com/hamzaayarii/devops-kaddem-frontend.git'
                }
            }
        }

        stage('Frontend - Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                    sh 'npm audit --production || echo "Audit completed with warnings, continuing..."'
                }
            }
        }


        stage('Frontend - Run Tests') {
              steps {
                  dir('frontend') {
                      // Ensure tests exit instead of hanging
                      sh 'npm test -- --watch=false --browsers=ChromeHeadless || true'
                  }
              }
          }

         stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'scanner'
                    withSonarQubeEnv('scanner') {
                        dir('frontend') {
                            sh """
                            ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=kaddem-devops-frontend \
                            -Dsonar.sources=src \
                            -Dsonar.language=js \
                            -Dsonar.exclusions=src/styles.css,src/assets/**,src/environments/**,node_modules/**,src/**/*.spec.ts \
                            -Dsonar.javascript.lcov.reportPaths=coverage/lcov-report/index-lcov-report.json
                            """
                        }
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('frontend') {
                    sh "docker build -t ${FRONTEND_IMAGE}:${FRONTEND_TAG} ."
                }
            }
        }

        stage('Push Docker Image to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        sh "docker push ${FRONTEND_IMAGE}:${FRONTEND_TAG}"
                    }
                }
            }
        }
        stage('Trigger CD Pipeline') {
    steps {
        build job: 'kaddem-pipeline',
              wait: true,
              parameters: [
                  string(name: 'BACKEND_TAG', value: "${BUILD_NUMBER}"),
                  string(name: 'FRONTEND_TAG', value: "${BUILD_NUMBER}")
              ]
    }
}
    }

    post {
        always {
            script {
                currentBuild.result = currentBuild.currentResult
            }
        }
    }
}
