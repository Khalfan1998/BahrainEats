import { Card, Descriptions, Divider, List, Button, AutoComplete } from "antd";
import dishes from "../src/assets/data/dishes.json";

function App() {
  return (
    <Card title={"Order Title"} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Customer">
          Mohammed Al Khalfan
        </Descriptions.Item>
        <Descriptions.Item label="Customer Address">
          House 44, Road 33, Area 220
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        dataSource={dishes}
        renderItem={(dishItem) => (
          <List.Item>
            <div style={{ fontWeight: "bold" }}>
              {dishItem.name} x{dishItem.quantity}
            </div>
            <div>BHD {dishItem.price}</div>
          </List.Item>
        )}
      />
      <Divider />
      <div style={styles.totalSumContainer}>
        <h2>Total:</h2>
        <h2 style={styles.totalPrice}>BHD 33</h2>
      </div>
      <Divider />
      <div style={styles.buttonsContainer}>
        <Button block type="danger" size="large" style={styles.button}>
          Decline Order
        </Button>
        <Button block type="primary" size="large" style={styles.button}>
          Accept Order
        </Button>
      </div>
      <Button block type="primary" size="large">
        Food is done
      </Button>
    </Card>
  );
}

const styles = {
  totalSumContainer: {
    flexDirection: "row",
    display: "flex",
  },
  totalPrice: {
    marginLeft: "auto",
    fontWeight: "bold",
  },
  buttonsContainer: {
    display: "flex",
    paddingBottom: 30,
  },
  button: {
    marginRight: 20,
    marginLeft: 20,
  },
};

export default App;
