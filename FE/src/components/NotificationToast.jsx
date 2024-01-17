import React, { useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'

export default function NotificationToast(props) {
  const toast = useToast()

  useEffect(() => {
    toast({
      variant: props.variant,
      duration: 2000,
      isClosable: true,
      position: props.position,
      title: props.title,
      description: props.description,
      status: props.status,
    })
  }, [toast, props])
  return null
}
