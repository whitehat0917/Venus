import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { CheckCircle, Copy } from 'react-feather'
import copy from 'copy-to-clipboard'
import { StyledIcon } from '../styles'

const CopyIcon = styled.div`
  color: #aeaeae;
  flex-shrink: 0;
  margin-right: 1rem;
  margin-left: 0.5rem;
  text-decoration: none;
  :hover,
  :active,
  :focus {
    text-decoration: none;
    opacity: 0.8;
    cursor: pointer;
  }
`
const TransactionStatusText = styled.div`
  margin-left: 0.25rem;
  align-items: center;
  color: black;
`

const useCopyClipboard = (timeout = 500) => {
  const [isCopied, setIsCopied] = useState(false)

  const staticCopy = useCallback((text) => {
    const didCopy = copy(text)
    setIsCopied(didCopy)
  }, [])

  useEffect(() => {
    if (isCopied) {
      const hide = setTimeout(() => {
        setIsCopied(false)
      }, timeout)

      return () => {
        clearTimeout(hide)
      }
    }
  }, [isCopied, setIsCopied, timeout])

  return [isCopied, staticCopy]
}

const CopyHelper = ({ toCopy }) => {
  const [isCopied, setCopied] = useCopyClipboard()

  return (
    <CopyIcon onClick={() => setCopied(toCopy)}>
      {isCopied ? (
        <TransactionStatusText>
          <StyledIcon>
            <CheckCircle size={'14'} />
          </StyledIcon>
        </TransactionStatusText>
      ) : (
        <TransactionStatusText>
          <StyledIcon>
            <Copy size={'14'} />
          </StyledIcon>
        </TransactionStatusText>
      )}
    </CopyIcon>
  )
}

export default CopyHelper