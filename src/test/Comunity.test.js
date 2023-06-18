/* eslint-disable no-undef */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Comunity from '../pages/Comunity'
import Modal from 'react-modal'

// Mock the setAppElement function
jest.mock('react-modal', () => {
  return {
    setAppElement: jest.fn()
  }
})

test('asks a question when the "Ask Question" button is clicked', () => {
  render(<Comunity/>)

  // Find the "Ask Question" button and click it
  const askQuestionButton = screen.getByText('+ Ask Questions')
  fireEvent.click(askQuestionButton)

  // Find the input field and enter a question
  const questionInput = screen.getByRole('textbox')
  fireEvent.change(questionInput, { target: { value: 'How to grow tomatoes?' } })

  // Find the "Update" button and click it
  const updateButton = screen.getByText('Update')
  fireEvent.click(updateButton)

  // Check if the question is displayed in the community section
  expect(screen.getByText('How to grow tomatoes?')).toBeInTheDocument()
})
