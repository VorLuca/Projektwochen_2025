plugins {
    id("java")
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.google.code.gson:gson:2.10")

    // Tomcat Embed (Falls du keinen externen Tomcat Server nutzen willst)
    implementation("org.apache.tomcat.embed:tomcat-embed-core:9.0.85")
    implementation("org.apache.tomcat.embed:tomcat-embed-jasper:9.0.85")

    // Unit-Test Dependency
    testImplementation("junit:junit:4.13.2")

    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
}

tasks.test {
    useJUnitPlatform()
}