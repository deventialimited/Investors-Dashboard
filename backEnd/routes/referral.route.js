import express from 'express'
import { generateRef, deleteRef, getRefs, getAllRefs } from '../controllers/referral.controller.js'
import { auth } from '../middlewares/auth.js'

const router = express.Router()

router.post('/generate-ref', auth, generateRef)
router.delete('/delete-ref/:id', auth, deleteRef)
router.get('/get-refs', auth, getRefs)
router.get('/get-all-refs', getAllRefs)


export { router as ReferralRoute }