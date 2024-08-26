'use client'

import { useHasMounted } from "@/utils/customHook";
import { Button, Form, Input, Modal, Steps } from "antd";
import { SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";

const ModalReactive = (props: any) => {
  const {isModalOpen, setIsModalOpen, userEmail} = props;
  const [current, setCurrent] = useState(0);
  const hasMounted = useHasMounted();
  const [form] = Form.useForm();

  useEffect(()=>{
    if(userEmail) {
      form.setFieldValue("email")
    }
  }, [userEmail]);

  if (!hasMounted) return <></>
  return(
    <>
      <Modal 
        title="Kích hoạt tài khoản" 
        open={isModalOpen} 
        onOk={() => setIsModalOpen(false)} 
        onCancel={() => setIsModalOpen(false)}
        maskClosable={false}
        footer={null}
      >
        <Steps
          current={current}
          items={[
            {
              title: 'Login',
              //status: 'finish',
              icon: <UserOutlined />,
            },
            {
              title: 'Verification',
              //status: 'finish',
              icon: <SolutionOutlined />,
            },
            {
              title: 'Done',
              status: 'wait',
              icon: <SmileOutlined />,
            },
          ]}
        />
        {current === 0 && 
        <>
          <div style={{marginTop: 20}}>Your account is not active!</div>
          <Form
            name="verify"
            //onFinish={onFinish}
            autoComplete="off"
            layout='vertical'
            form={form}

          >
          <Form.Item
            label=""
            name="email"
          >
              <Input disabled value={userEmail}/>
          </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                  Resend
              </Button>
            </Form.Item>
          </Form>
          </>
        }
        {current === 1 && 
          <div style={{marginTop: 20}}>step 1</div>
        }
      </Modal>
    </>
  )
}
export default ModalReactive