import { Capabilities, Builder } from "selenium-webdriver";
const capabilities = new Capabilities()
    .setBrowserName('chrome')
    .setBrowserVersion('99.0')
    .set("google:chromeOptions", {
        "args": ["--headless"]
    })
    .set('moon:options', {
        enableVNC: false,
        enableVideo: false
    });
const seleniumHubAddress = "http://localhost:4444/wd/hub"
    
let driver = await new Builder().withCapabilities(capabilities).usingServer(seleniumHubAddress).build();