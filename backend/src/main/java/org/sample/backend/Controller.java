package org.sample.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping("/get")
    @CrossOrigin(origins = "http://localhost:3000")
    public String get() {
        return "auth ok";
    }
}
