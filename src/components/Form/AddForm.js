import { Button, Form, Input } from 'antd';
import { forwardRef, useImperativeHandle } from 'react';

function AddForm({ onHandleSubmit }, ref) {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    resetForm: form.resetFields
  }))
  return (
    <Form
      name="basic"
      initialValues={{ remember: false }}
      autoComplete="off"
      form={form}
      onFinish={onHandleSubmit}
    >
      <Form.Item
        name="link"
      >
        <Input placeholder={'Bağlantı giriniz...'} />
      </Form.Item>
      <Button type="primary" htmlType="submit">Add</Button>
    </Form>
  )
}
export default forwardRef(AddForm);
