'use client'

import React, { useState } from 'react'
import { Button, Form, Input, Typography } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { TextArea } = Input
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ProvideFeedbackPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: { content: string }) => {
    if (!userId) {
      enqueueSnackbar('User not found. Please log in.', { variant: 'error' })
      return
    }

    try {
      setLoading(true)
      await Api.Feedback.createOneByUserId(userId, {
        content: values.content,
        feedbackDate: dayjs().format('YYYY-MM-DD'),
        userId,
      })
      enqueueSnackbar('Feedback submitted successfully!', {
        variant: 'success',
      })
      router.push('/feedback')
    } catch (error) {
      console.error(error)
      enqueueSnackbar('Failed to submit feedback. Please try again.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <SmileOutlined /> Provide Feedback
        </Title>
        <Paragraph>
          Your feedback is invaluable to us. Share your mental health journey
          and experiences on the platform.
        </Paragraph>
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="content"
            rules={[{ required: true, message: 'Please input your feedback!' }]}
          >
            <TextArea rows={4} placeholder="Share your feedback" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit Feedback
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
