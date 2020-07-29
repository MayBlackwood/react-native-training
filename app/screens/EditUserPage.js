import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Alert,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button } from 'react-native-elements';
import * as Yup from 'yup';
import * as Animatable from 'react-native-animatable';

import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import FormInput from '../components/FormInput';
import { updateUser } from '../services';
import { updateUserData } from '../store/actions/UsersActions';

const FormSchema = Yup.object().shape({
  username: Yup.string()
    .required('* Required')
    .min(2, 'Too Short!')
    .max(40, 'Too Long!'),
  firstname: Yup.string()
    .required('* Required')
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .matches(/[a-zA-Z]/, 'First name can only contain Latin letters.'),
  lastname: Yup.string()
    .required('* Required')
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .matches(/[a-zA-Z]/, 'Last name can only contain Latin letters.'),
  email: Yup.string()
    .required('* Required')
    .min(2, 'Too Short!')
    .max(150, 'Too Long!')
    .email('Invalid email'),
  description: Yup.string().min(2, 'Too Short!').max(40, 'Too Long!'),
});

const EditUserPage = ({
  navigation,
  route: {
    params: {
      userData: {
        username,
        firstname,
        lastname,
        email,
        description,
        id,
        userImage,
      },
    },
  },
}) => {
  const dispatch = useDispatch();
  const handleSaveButtonClick = async (values) => {
    try {
      const { data } = await updateUser(values, id, navigation);
      Alert.alert('Success', data);
      dispatch(updateUserData({ ...values, id }));
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const profileIcon = userImage
    ? require(`../images/back.jpg`)
    : require(`../images/plant.png`);

  let navTitleView;

  return (
    <Formik
      initialValues={{
        username,
        firstname,
        lastname,
        email,
        description,
      }}
      validationSchema={FormSchema}
      onSubmit={(values) => handleSaveButtonClick(values)}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <HeaderImageScrollView
          maxHeight={200}
          minHeight={60}
          headerImage={require('../images/back.jpg')}
          fadeOutForeground
          renderForeground={() => (
            <View style={styles.header}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../images/plant.png')}
                />
              </View>
            </View>
          )}
        >
          {formConfig.map(({ value, title }) => (
            <View style={styles.section} key={value}>
              <FormInput
                title={title}
                value={value}
                handleChange={handleChange}
                values={values}
                errors={errors}
                touched={touched}
                key={value}
              />
            </View>
          ))}

          <Button
            title="Save Changes"
            onPress={handleSubmit}
            buttonStyle={styles.confirmButton}
          />
        </HeaderImageScrollView>
      )}
    </Formik>
  );
};

export default EditUserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 120,
    borderColor: '#46454B',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: 'white',
  },
  section: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  confirmButton: {
    width: '90%',
    backgroundColor: '#5B98A6',
    marginBottom: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const formConfig = [
  { value: 'username', title: 'Username' },
  { value: 'firstname', title: 'First Name' },
  { value: 'lastname', title: 'Last Name' },
  { value: 'email', title: 'E-mail' },
  { value: 'description', title: 'Description' },
];
