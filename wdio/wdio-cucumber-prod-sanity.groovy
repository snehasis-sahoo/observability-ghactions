pipeline {
    agent any

    tools {nodejs "NODEJS"}

    stages {
        stage('Setup Test Observability Samples') {
            steps{
                dir("test-samples/nodejs/wdio") {
                    sh 'pwd'
                    sh 'rm -rf node_modules'
                    sh 'npm cache clean --force'
                    sh 'npm install'
                    sh "sed -i -e 's/projectName:.*/projectName: \"${PROJECT_NAME}\",/g' wdio-cucumber-bs.conf.js"
                    sh "sed -i -e 's/buildName:.*/buildName: \"${BUILD_NAME}\",/g' wdio-cucumber-bs.conf.js"
                }
            }
        }

        stage('Run Tests') {
            steps{
                dir("test-samples/nodejs/wdio") {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        browserstack(credentialsId: '912d2341-f505-45fd-a115-76659ffc4318'){
                            sh "sed -i -e \"s/.*user: '.*/user: '${BROWSERSTACK_USERNAME}',/g\" wdio-cucumber-bs.conf.js"
                            sh "sed -i -e \"s/.*key: '.*/key: '${BROWSERSTACK_ACCESS_KEY}',/g\" wdio-cucumber-bs.conf.js"
                            sh 'pwd'
                            sh "npm run e2e-test-wdio-cucumber-bs"
                            cleanWs()
                        }
                    }   
                }
            }
        }
    }
}
