const request = require('supertest')('http://localhost:3000/api')
const expect = require('chai').expect

describe('GET /search?text= (Without param)', () => {
  it('return words reverse - Failed', async () => {
    const response = await request.get('/search')

    expect(response.status).to.eql(400)
  })
})

describe('GET /search?text=bear (with param)', () => {
  it('return words reverse - Success', async () => {
    const response = await request.get('/search/bear')

    expect(response.status).to.eql(200)
    expect(response.body).to.eql({ text: 'raeb', palindrome: false })
  })

  it('bear is not palindrome', async () => {
    const response = await request.get('/search/bear')

    expect(response.body.palindrome).to.eql(false)
    expect(response.body.text).to.eql('raeb')
  })
})

describe('GET /search?text=dad (with param)', () => {
  it('return words reverse - Success', async () => {
    const response = await request.get('/search/dad')

    expect(response.status).to.eql(200)
    expect(response.body).to.eql({ text: 'dad', palindrome: true })
    expect(response.body.text).to.eql('dad')
  })

  it('dad is palindrome', async () => {
    const response = await request.get('/search/dad')

    expect(response.body.palindrome).to.eql(true)
  })
})

describe('GET /list (without param)', function () {
  it('return list', async function () {
    const response = await request.get('/list')

    expect(response.status).to.eql(404)
  })
})
