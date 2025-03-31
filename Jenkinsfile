pipeline {
    agent any

    tools {
        nodejs 'NodeJS_22'
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKER_USERNAME = "hamzabox"
        FRONTEND_IMAGE = "${DOCKER_USERNAME}/ayarihamza-g1-kaddem-frontend"
        FRONTEND_TAG = "${BUILD_NUMBER}"
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

                }
            }
        }
        stage('Frontend - Run Tests') {
              steps {
                  dir('frontend') {
                      sh 'npm test -- --watch=false --browsers=ChromeHeadless'
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
    }

    post {
        always {
            script {
                currentBuild.result = currentBuild.currentResult
            }
        }
    }
}
