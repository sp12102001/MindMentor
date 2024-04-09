'use client'

import React, { useState, useEffect } from 'react'
import { Button, Form, Input, DatePicker, Typography, Row, Col } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SetNewGoalPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const handleSubmit = async (values: any) => {
    try {
      const formattedValues = {
        ...values,
        targetDate: values.targetDate.format('YYYY-MM-DD'),
        status: 'Active', // Assuming 'Active' is a valid status for a new goal
      }
      await Api.Goal.createOneByUserId(userId, formattedValues)
      enqueueSnackbar('Goal successfully created!', { variant: 'success' })
      router.push('/goals')
    } catch (error) {
      enqueueSnackbar('Failed to create goal. Please try again.', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={8}>
          <Title level={2}>Set a New Goal</Title>
          <Paragraph>
            Setting personal goals can significantly contribute to your mental
            health and productivity. Let's add a new goal!
          </Paragraph>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="description"
              label="Goal Description"
              rules={[{ required: true, message: 'Please input your goal!' }]}
            >
              <Input placeholder="What is your goal?" />
            </Form.Item>
            <Form.Item
              name="targetDate"
              label="Target Date"
              rules={[
                { required: true, message: 'Please select your target date!' },
              ]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<PlusCircleOutlined />}
              >
                Set Goal
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
