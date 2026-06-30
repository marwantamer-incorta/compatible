import { ConfigProvider } from 'antd5';
import type { ConfigConsumerProps } from 'antd5/lib/config-provider';

export type { ConfigConsumerProps };

const MergedConfigConsumer = ConfigProvider.ConfigContext.Consumer;

export default MergedConfigConsumer;
