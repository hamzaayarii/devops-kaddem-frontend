pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKER_USERNAME = "hamzabox"
        FRONTEND_IMAGE = "${DOCKER_USERNAME}/ayarihamza-g1-kaddem-frontend"
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
        stage('Parallel Tasks') {
            parallel {
                stage('Frontend - Run Tests') {
                    steps {
                        dir('frontend') {
                            sh 'npm test -- --watch=false --browsers=ChromeHeadless --code-coverage'
                            sh 'npm run lint'
                        }
                    }
                    post {
                        always {
                            junit '**/test-results.xml'
                            archiveArtifacts artifacts: 'frontend/coverage/**', allowEmptyArchive: true
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
                                    -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                                    -Dsonar.sources=src \
                                    -Dsonar.language=js \
                                    -Dsonar.exclusions=src/styles.css,src/assets/**,src/environments/**,node_modules/**,src/**/*.spec.ts \
                                    -Dsonar.javascript.lcov.reportPaths=coverage/lcov-report/lcov.info
                                    """
                                }
                            }
                            timeout(time: 5, unit: 'MINUTES') {
                                waitForQualityGate abortPipeline: true
                            }
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
