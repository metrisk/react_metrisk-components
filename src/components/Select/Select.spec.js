context('Select', () => {

  describe(`Base`, () => {
    const id = 'components-select--base'

    it('Choose an option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('#select').focus()
      cy.get('.select__option:nth-child(1)').click()
      cy.get('.text--p').invoke('text').should('eq', 'Value: option-1')

      cy.get('#select').focus()
      cy.get('.select__option:nth-child(2)').click()
      cy.get('.text--p').invoke('text').should('eq', 'Value: option-2')
    })
  })

  describe(`Optional`, () => {
    const id = 'components-select--optional'

    it('Choose an option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('#select').focus()
      cy.get('.select__option:nth-child(1)').click()
      cy.get('.text--p').invoke('text').should('eq', 'Value: null')

      cy.get('#select').focus()
      cy.get('.select__option:nth-child(2)').click()
      cy.get('.text--p').invoke('text').should('eq', 'Value: option-1')

      cy.get('#select').focus()
      cy.get('.select__option:nth-child(3)').click()
      cy.get('.text--p').invoke('text').should('eq', 'Value: option-2')
    })
  })

  describe(`Searchable`, () => {
    const id = 'components-select--searchable'

    it('Types out a known option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('#select').type('Option 1')
      cy.get('.text--p').invoke('text').should('eq', 'Value: option-1')

      cy.get('#select').clear().type('option 1')
      cy.get('.text--p').invoke('text').should('eq', 'Value: option-1')
    })

    it('Types out an unknown option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('#select').type('foo')
      cy.get('.text--p').invoke('text').should('eq', 'Value: null')
    })

    it('Choose a known option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('#select').focus()
      cy.get('.select__option:nth-child(1)').click()
      cy.get('.text--p').invoke('text').should('eq', 'Value: option-1')

      cy.get('#select').focus().clear()
      cy.get('.select__option:nth-child(2)').click()
      cy.get('.text--p').invoke('text').should('eq', 'Value: option-2')
    })
  })
})
