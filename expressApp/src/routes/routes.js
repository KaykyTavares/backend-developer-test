const companiesController = require("../controller/companiesController")
const jobsController = require("../controller/jobsController")
const feedController = require("../controller/feedController")
const express = require("express")
const router = express.Router()

// 
router.get("/feed", async (req, res) => { await feedController.getFeed(res) })

// Companies routes
router.get("/companies", async (req, res) => { await companiesController.getCompanies(res) })
router.get("/companies/:company_id", async (req, res) => { await companiesController.getCompany(req, res) })

// Jobs routes
router.post("/job", async (req, res) => { await jobsController.creatJobDraft(req, res) })
router.put("/job/:job_id/publish", async (req, res) => { await jobsController.publishJobPostDraft(req, res) })
router.put("/job/:job_id", async (req, res) => { await jobsController.editJobPostDraft(req, res) })
router.delete("/job/:job_id", async (req, res) => { await jobsController.deleteJobPostDraft(req, res) })
router.put("/job/:job_id/archive", async (req, res) => { await jobsController.arquiveActiveJobPost(req, res) })

module.exports = router