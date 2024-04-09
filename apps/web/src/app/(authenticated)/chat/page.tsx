'use client'

import React, { useState, useEffect } from 'react'
import { Input, Button, Typography, Row, Col, Card, Avatar } from 'antd'
import { UserOutlined, SendOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ChatwithAgentPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    if (!authentication.isAuthenticated) {
      router.push('/home')
      enqueueSnackbar('Please login to chat with an agent.', {
        variant: 'info',
      })
    }
  }, [authentication.isAuthenticated, router])

  const sendMessage = async () => {
    if (message.trim() === '') {
      enqueueSnackbar('Please enter a message.', { variant: 'error' })
      return
    }

    try {
      const agentResponse = await Api.Ai.chat(message)
      setChatHistory(prev => [
        ...prev,
        { message, from: 'user' },
        { message: agentResponse, from: 'agent' },
      ])
      setMessage('')
    } catch (error) {
      enqueueSnackbar('Failed to send message. Please try again.', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Title level={2}>Chat with a Mental Health Agent</Title>
          <Text>Get guidance and support from our conversational agent.</Text>
          <Card style={{ marginTop: '20px' }}>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    marginBottom: '10px',
                    justifyContent:
                      chat.from === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  {chat.from === 'agent' && <Avatar icon={<UserOutlined />} />}
                  <Card
                    style={{
                      marginLeft: chat.from === 'agent' ? '10px' : '0',
                      marginRight: chat.from === 'user' ? '10px' : '0',
                    }}
                  >
                    <Text>{chat.message}</Text>
                  </Card>
                  {chat.from === 'user' && <Avatar icon={<UserOutlined />} />}
                </div>
              ))}
            </div>
            <Input.Group compact style={{ marginTop: '20px' }}>
              <Input
                style={{ width: 'calc(100% - 40px)' }}
                value={message}
                onChange={e => setMessage(e.target.value)}
                onPressEnter={sendMessage}
              />
              <Button
                type="primary"
                icon={<SendOutlined />}
                onClick={sendMessage}
              />
            </Input.Group>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
