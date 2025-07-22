const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home',
        currentPage: 'home'
    });
});

router.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About',
        currentPage: 'about'
    });
});

router.get('/services', (req, res) => {
    res.render('services', { 
        title: 'Services',
        currentPage: 'services'
    });
});

router.get('/projects', (req, res) => {
    res.render('projects', { 
        title: 'Projects',
        currentPage: 'projects'
    });
});

router.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact',
        currentPage: 'contact'
    });
});

module.exports = router;