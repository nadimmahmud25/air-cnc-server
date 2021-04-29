const express = require('express');
const router = express.Router();
const experienceController = require('../controller/experienceController')


router.post('/experience', experienceController.create);
router.get('/experiences', experienceController.getExperience);
router.delete('/experience/:id', experienceController.getExperienceByIdAndDelete)

module.exports = router;