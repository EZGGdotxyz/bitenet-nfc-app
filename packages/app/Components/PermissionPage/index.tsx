/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-19 17:20:51
 * @FilePath: /snapx-nfc-app/packages/app/Components/PermissionPage/index.tsx
 */
import {PrimaryColor} from 'app/config';
import {useRematchModel} from 'app/store/model';
import {useEffect} from 'react';
import {createParam} from 'solito';
import {useLink} from 'solito/link';
import {useRouter} from 'solito/router';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'app/store';
import {getUserToken} from 'app/utils/auth';
import {SafeAreaView, View, useColorScheme} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeModules} from 'react-native';

interface PermissionPageProps {
  children?: React.ReactNode;
  isLoginPage?: boolean;
  isHomePage?: boolean;
}

export default function PermissionPage(props: PermissionPageProps) {
  const {isLoginPage = false, isHomePage = false} = props;
  const dispatch = useDispatch<Dispatch>();
  // const {params} = useParams();
  const [app] = useRematchModel('app');
  const scheme = useColorScheme();
  const {replace} = useRouter();
  const insets = useSafeAreaInsets();

  const checkUserPermission = async () => {
    const token: any = await getUserToken();
    setTimeout(() => {
      if (!token) {
        if (!isLoginPage) {
          dispatch.user.locallyLogout();
          if (!isHomePage) {
            replace({
              pathname: '/',
            });
          }
        }
      } else {
        if (isLoginPage && !isHomePage) {
          replace({
            pathname: '/',
          });
        }
      }
    });
    // const res=await dispatch.user.checkUserPermission();
    // console.log('🚀 ~ checkUserPermission ~ res', res)
  };

  useEffect(() => {
    checkUserPermission();
  }, [isLoginPage, isHomePage]);

  return (
    <View
      id="appPage"
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: scheme === 'dark' ? '#151515' : '#fff',
        position: 'relative',
        paddingBottom: insets.bottom,
      }}
    >
      {props.children}
    </View>
  );
}
