import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';

function Footer() {
  return(
    <div style={{
      height: '80px',
      display: 'grid',
      backgroundColor: '#001529',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

    }}>
      <p>HIMEDIA<SmileOutlined /></p>
    </div>
  );

}

export default Footer;