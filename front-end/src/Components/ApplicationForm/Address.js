import {
  Col,
  Form,
  Input
} from "antd"

const Address = () => {
  return (
    <>
      <Col span={24}>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input your address' }]}
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: 'Please input your city' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: 'Please input your state' }]}
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: 'Please input your country' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label="Postal Code"
          name="postalCode"
          rules={[{ required: true, message: 'Please input your postal code' }]}
        >
          <Input />
        </Form.Item>
      </Col>
    </>
  )
}

export default Address