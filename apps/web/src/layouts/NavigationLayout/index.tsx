import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  const itemsLeftbar = [
    {
      key: '/chat',
      label: 'Chat',
      onClick: () => goTo('/chat'),
    },

    {
      key: '/goals',
      label: 'Goals',
      onClick: () => goTo('/goals'),
    },

    {
      key: '/goals/create',
      label: 'Set New Goal',
      onClick: () => goTo('/goals/create'),
    },

    {
      key: '/feedback',
      label: 'Feedback',
      onClick: () => goTo('/feedback'),
    },

    {
      key: '/feedback/create',
      label: 'Provide Feedback',
      onClick: () => goTo('/feedback/create'),
    },

    {
      key: '/strategies',
      label: 'Strategies',
      onClick: () => goTo('/strategies'),
    },

    {
      key: '/progress',
      label: 'My Progress',
      onClick: () => goTo('/progress'),
    },

    {
      key: '/home',
      label: 'Home',
      onClick: () => goTo('/home'),
    },
  ]

  const itemsUser = []

  const itemsTopbar = []

  const itemsSubNavigation = [
    {
      key: '/chat',
      label: 'Chat',
    },

    {
      key: '/goals',
      label: 'Goals',
    },

    {
      key: '/goals/create',
      label: 'Set New Goal',
    },

    {
      key: '/feedback',
      label: 'Feedback',
    },

    {
      key: '/feedback/create',
      label: 'Provide Feedback',
    },

    {
      key: '/strategies',
      label: 'Strategies',
    },

    {
      key: '/strategies/:id',
      label: 'Strategy Details',
    },

    {
      key: '/progress',
      label: 'My Progress',
    },

    {
      key: '/home',
      label: 'Home',
    },
  ]

  const itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              items={itemsTopbar}
              itemsMobile={itemsMobile}
              logo={!isLeftbar && <Logo width={40} height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />

              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}