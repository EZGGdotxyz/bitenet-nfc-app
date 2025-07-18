/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-19 23:26:05
 * @FilePath: /snapx-nfc-app/packages/app/Components/AppModal/index.tsx
 */
import {Button, Paragraph, YStack} from '@my/ui';
import {PrimaryColor} from 'app/config';
import {useRematchModel} from 'app/store/model';
import {Modal, TouchableWithoutFeedback, View} from 'react-native';

interface AppButtonProps {
  modalVisible: any;
  setModalVisible: (values) => void;
  children: React.ReactNode;
  animationType?: string;
  zIndex?: number;
}

export default function AppModal(props: AppButtonProps) {
  const {modalVisible, setModalVisible, children, animationType = 'fade', zIndex = 10} = props;
  const [app] = useRematchModel('app');

  const onExit = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType={animationType}
      onDismiss={onExit}
      onRequestClose={onExit}
      transparent={true}
      visible={modalVisible}
      zIndex={zIndex}
      useNativeDriver={true}
    >
      <YStack pos={'relative'} width={app.appWidth} height={app?.appHeight} bc={'rgba(0, 0, 0, 0.5)'}>
        <Button unstyled chromeless w={'100%'} height={'100%'} bc={'rgba(0, 0, 0, 0.5)'} onPress={onExit}></Button>
        {children}
      </YStack>
    </Modal>
  );
}
