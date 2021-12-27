import { Router } from 'express'

const router = Router()

router.get('/:text?', (req, res) => {
  const text = req.params.text

  if (text === undefined) {
    res.status(400).json({ error: 'No text' })
  } else {
    const response = text.split('').reverse().join('')

    res.status(200).json({
      text: response,
      palindrome: response === text
    })
  }
})

export default router
