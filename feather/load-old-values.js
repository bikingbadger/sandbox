const fetch = require('node-fetch');

const weightSeries = [
  {
    _id: '5eb83292b15f1300175ddd57',
    weightDate: '2020-05-10',
    weightKilograms: '89.2',
    fatPercent: '15.4',
    weightBone: '3.7',
    waterPercent: '56.3',
    weightMuscle: '71.8',
    bellyIndex: '5.5',
    _createdOn: '2020-05-10T16:57:54.424Z',
  },
  {
    _id: '5eb8327eb15f1300175ddd56',
    weightDate: '2020-05-09',
    weightKilograms: '89.3',
    fatPercent: '15',
    weightBone: '3.7',
    waterPercent: '56.6',
    weightMuscle: '72.2',
    bellyIndex: '5.5',
    _createdOn: '2020-05-10T16:57:34.039Z',
  },
  {
    _id: '5eb83268b15f1300175ddd55',
    weightDate: '2020-05-08',
    weightKilograms: '88.1',
    fatPercent: '14.5',
    weightBone: '3.7',
    waterPercent: '56.8',
    weightMuscle: '71.6',
    bellyIndex: '5.0',
    _createdOn: '2020-05-10T16:57:12.313Z',
  },
  {
    _id: '5eb83255b15f1300175ddd54',
    weightDate: '2020-05-07',
    weightKilograms: '88.3',
    fatPercent: '15.2',
    weightBone: '3.7',
    waterPercent: '56.3',
    weightMuscle: '71.2',
    bellyIndex: '5.5',
    _createdOn: '2020-05-10T16:56:53.487Z',
  },
  {
    _id: '5eb83239b15f1300175ddd53',
    weightDate: '2020-05-05',
    weightKilograms: '88.2',
    fatPercent: '14.9',
    weightBone: '3.7',
    waterPercent: '56.6',
    weightMuscle: '71.4',
    bellyIndex: '5.5',
    _createdOn: '2020-05-10T16:56:25.443Z',
  },
  {
    _id: '5eb83224b15f1300175ddd51',
    weightDate: '2020-05-04',
    weightKilograms: '88.7',
    fatPercent: '15.6',
    weightBone: '3.7',
    waterPercent: '56.1',
    weightMuscle: '71.1',
    bellyIndex: '5.5',
    _createdOn: '2020-05-10T16:56:04.768Z',
  },
  {
    _id: '5ea65ed743f5c400171010e9',
    weightDate: '2020-04-27',
    weightKilograms: '88.6',
    fatPercent: '15.7',
    weightBone: '3.7',
    waterPercent: '56',
    weightMuscle: '71',
    bellyIndex: '5.5',
    _createdOn: '2020-04-27T04:25:59.374Z',
  },
  {
    _id: '5ea65eb843f5c400171010e8',
    weightDate: '2020-04-23',
    weightKilograms: '88.3',
    fatPercent: '14.7',
    weightBone: '3.7',
    waterPercent: '56.7',
    weightMuscle: '71.7',
    bellyIndex: '5.0',
    _createdOn: '2020-04-27T04:25:28.441Z',
  },
  {
    _id: '5ea65ea443f5c400171010e7',
    weightDate: '2020-04-21',
    weightKilograms: '88.5',
    fatPercent: '15.4',
    weightBone: '3.7',
    waterPercent: '56.5',
    weightMuscle: '71.1',
    bellyIndex: '5.5',
    _createdOn: '2020-04-27T04:25:08.673Z',
  },
  {
    _id: '5e858541532add00174acc0e',
    weightDate: '2020-04-02',
    weightKilograms: '87.9',
    fatPercent: '15',
    weightBone: '3.7',
    waterPercent: '57.7',
    weightMuscle: '71',
    bellyIndex: '3.5',
    _createdOn: '2020-04-02T06:25:05.664Z',
  },
  {
    _id: '5e841f4fc9bdb40017341e0b',
    weightDate: '2020-04-01',
    weightKilograms: '88.1',
    fatPercent: '13.1',
    weightBone: '3.8',
    waterPercent: '59.1',
    weightMuscle: '72.9',
    bellyIndex: '3.0',
    _createdOn: '2020-04-01T04:57:51.879Z',
  },
  {
    _id: '5e82e084c9bdb40017341c07',
    weightDate: '2020-03-31',
    weightKilograms: '87.7',
    fatPercent: '13.4',
    weightBone: '3.7',
    waterPercent: '58.9',
    weightMuscle: '72.2',
    bellyIndex: '3.0',
    _createdOn: '2020-03-31T06:17:40.692Z',
  },
  {
    _id: '5e8175dd0f0f8f0017b4fdf6',
    weightDate: '2020-03-30',
    weightKilograms: '87.8',
    fatPercent: '14.2',
    weightBone: '3.7',
    waterPercent: '58.3',
    weightMuscle: '71.6',
    bellyIndex: '3.5',
    _createdOn: '2020-03-30T04:30:21.944Z',
  },
  {
    _id: '5e81756e0f0f8f0017b4fdf5',
    weightDate: '2020-03-29',
    weightKilograms: '87.6',
    fatPercent: '13.8',
    weightBone: '3.7',
    waterPercent: '58.5',
    weightMuscle: '71.8',
    bellyIndex: '3.0',
    _createdOn: '2020-03-30T04:28:30.458Z',
  },
  {
    _id: '5e7cc2b2c0c3bf0017b54442',
    weightDate: '2020-03-26',
    weightKilograms: '86.6',
    fatPercent: '15.7',
    weightBone: '3.6',
    waterPercent: '57.2',
    weightMuscle: '69.4',
    bellyIndex: '4.0',
    _createdOn: '2020-03-26T14:56:50.885Z',
  },
  {
    _id: '5e7b006499ed160017dc2c9b',
    weightDate: '2020-03-25',
    weightKilograms: '86.7',
    fatPercent: '13.9',
    weightBone: '3.7',
    waterPercent: '58.4',
    weightMuscle: '71',
    bellyIndex: '3.0',
    _createdOn: '2020-03-25T06:55:32.157Z',
  },
  {
    _id: '5e79b5936252c20017623fe2',
    weightDate: '2020-03-24',
    weightKilograms: '87.2',
    fatPercent: '15.5',
    weightBone: '3.6',
    waterPercent: '57.4',
    weightMuscle: '70.1',
    bellyIndex: '3.5',
    _createdOn: '2020-03-24T07:24:03.760Z',
  },
  {
    _id: '5e71e08d012b300017abe4ec',
    weightDate: '2020-03-18',
    weightKilograms: '87.8',
    fatPercent: '16.7',
    weightBone: '3.6',
    waterPercent: '56.7',
    weightMuscle: '69.5',
    bellyIndex: '4.0',
    _createdOn: '2020-03-18T08:49:17.745Z',
  },
  {
    _id: '5e706355c923650017136155',
    weightDate: '2020-03-17',
    weightKilograms: '87.8',
    fatPercent: '15.6',
    weightBone: '3.7',
    waterPercent: '57.8',
    weightMuscle: '70.5',
    bellyIndex: '4.0',
    _createdOn: '2020-03-17T05:42:45.824Z',
  },
  {
    _id: '5e6dcee827b0e70017d07fb3',
    weightDate: '2020-03-15',
    weightKilograms: '89.1',
    fatPercent: '15.1',
    weightBone: '3.7',
    waterPercent: '57.7',
    weightMuscle: '71.9',
    bellyIndex: '3.5',
    _createdOn: '2020-03-15T06:44:56.051Z',
  },
  {
    _id: '5e6c9379b4b96e0017f44766',
    weightDate: '2020-03-14',
    weightKilograms: '88.5',
    fatPercent: '17.3',
    weightBone: '3.6',
    waterPercent: '56.3',
    weightMuscle: '69.5',
    bellyIndex: '4.5',
    _createdOn: '2020-03-14T08:19:05.697Z',
  },
  {
    _id: '5e6c9347b4b96e0017f44765',
    weightDate: '2020-03-13',
    weightKilograms: '88',
    fatPercent: '14.4',
    weightBone: '3.7',
    waterPercent: '58.2',
    weightMuscle: '71.7',
    bellyIndex: '3.5',
    _createdOn: '2020-03-14T08:18:15.056Z',
  },
  {
    _id: '5e6c932bb4b96e0017f44764',
    weightDate: '2020-03-08',
    weightKilograms: '88.2',
    fatPercent: '14.1',
    weightBone: '3.7',
    waterPercent: '53.4',
    weightMuscle: '72.1',
    bellyIndex: '3.5',
    _createdOn: '2020-03-14T08:17:47.124Z',
  },
  {
    _id: '5e5e2c0b78f4eb0017be3480',
    weightDate: '2020-03-03',
    weightKilograms: '86.4',
    fatPercent: '14.8',
    weightBone: '3.6',
    waterPercent: '57.8',
    weightMuscle: '70',
    bellyIndex: '3.5',
    _createdOn: '2020-03-03T10:06:03.414Z',
  },
  {
    _id: '5e59f84ab7fe650017e25edf',
    weightDate: '2020-02-29',
    weightKilograms: '87.3',
    fatPercent: '14.5',
    weightBone: '3.7',
    waterPercent: '58',
    weightMuscle: '71',
    bellyIndex: '3.5',
    _createdOn: '2020-02-29T05:36:10.738Z',
  },
  {
    _id: '5e59f7c1b7fe650017e25ede',
    weightDate: '2020-02-28',
    weightKilograms: '86.8',
    fatPercent: '15.5',
    weightBone: '3.6',
    waterPercent: '56.1',
    weightMuscle: '69.7',
    bellyIndex: '5.5',
    _createdOn: '2020-02-29T05:33:53.944Z',
  },
  {
    _id: '5e36c140cd2e750017d0b158',
    weightDate: '2020-01-31',
    weightKilograms: '86.7',
    fatPercent: '14.6',
    weightBone: '3.6',
    waterPercent: '56.6',
    weightMuscle: '70.4',
    bellyIndex: '5.0',
    _createdOn: '2020-02-02T12:32:00.906Z',
  },
  {
    _id: '5e3291b8f44dbe00170af9ee',
    weightDate: '2020-01-30',
    weightKilograms: '86.8',
    fatPercent: '15',
    weightBone: '3.6',
    waterPercent: '56.4',
    weightMuscle: '70.2',
    bellyIndex: '5.0',
    _createdOn: '2020-01-30T08:20:08.147Z',
  },
  {
    _id: '5e23d24413421800173c015b',
    weightDate: '2020-01-19',
    weightKilograms: '87',
    fatPercent: '14.7',
    weightBone: '3.7',
    waterPercent: '56.5',
    weightMuscle: '70.5',
    bellyIndex: '5.0',
    _createdOn: '2020-01-19T03:51:32.182Z',
  },
  {
    _id: '5e1d46bfc1c37200174a5570',
    weightDate: '2020-01-15',
    weightKilograms: '87.2',
    fatPercent: '15.4',
    weightBone: '3.6',
    waterPercent: '56.1',
    weightMuscle: '70.1',
    bellyIndex: '5.5',
    _createdOn: '2020-01-14T04:42:39.673Z',
  },
  {
    _id: '5e1d467ec1c37200174a556f',
    weightDate: '2020-01-14',
    weightKilograms: '86.7',
    fatPercent: '15.2',
    weightBone: '3.6',
    waterPercent: '56.2',
    weightMuscle: '69.9',
    bellyIndex: '5.5',
    _createdOn: '2020-01-14T04:41:34.745Z',
  },
  {
    _id: '5e182075c82ad9001772e0ec',
    weightDate: '2020-01-10',
    weightKilograms: '86.9',
    fatPercent: '14.2',
    weightBone: '3.7',
    waterPercent: '56.9',
    weightMuscle: '70.9',
    bellyIndex: '5.0',
    _createdOn: '2020-01-10T06:57:57.476Z',
  },
  {
    _id: '5e005a8c3846ca00174d09c3',
    weightDate: '2019-12-23',
    weightKilograms: '85.3',
    fatPercent: '13.7',
    weightBone: '3.6',
    waterPercent: '57.1',
    weightMuscle: '70',
    bellyIndex: '4.5',
    _createdOn: '2019-12-23T06:11:24.470Z',
  },
  {
    _id: '5df7d373bca42200177decce',
    weightDate: '2019-12-16',
    weightKilograms: '84.3',
    fatPercent: '13.8',
    weightBone: '3.6',
    waterPercent: '57',
    weightMuscle: '69.1',
    bellyIndex: '4.5',
    _createdOn: '2019-12-16T18:56:51.390Z',
  },
  {
    _id: '5de9dae1a713ca00177355c7',
    weightDate: '2019-12-06',
    weightKilograms: '85.3',
    fatPercent: '15.6',
    weightBone: '3.6',
    waterPercent: '55.9',
    weightMuscle: '68.4',
    bellyIndex: '5.5',
    _createdOn: '2019-12-06T04:36:49.498Z',
  },
  {
    _id: '5de8bb92de45ab001702a3f4',
    weightDate: '2019-12-05',
    weightKilograms: '85.1',
    fatPercent: '13.4',
    weightBone: '3.6',
    waterPercent: '57.3',
    weightMuscle: '70.1',
    bellyIndex: '4.5',
    _createdOn: '2019-12-05T08:10:58.073Z',
  },
  {
    _id: '5de76a733decca00171262a5',
    weightDate: '2019-12-04',
    weightKilograms: '84.5',
    fatPercent: '15.1',
    weightBone: '3.5',
    waterPercent: '56.1',
    weightMuscle: '68.1',
    bellyIndex: '5.0',
    _createdOn: '2019-12-04T08:12:35.807Z',
  },
  {
    _id: '5de4c0da0d8dcc00172f03db',
    weightDate: '2019-12-02',
    weightKilograms: '85.9',
    fatPercent: '14.2',
    weightBone: '3.6',
    waterPercent: '56.8',
    weightMuscle: '70.1',
    bellyIndex: '5.0',
    _createdOn: '2019-12-02T07:44:26.400Z',
  },
  {
    _id: '5de4c0c60d8dcc00172f03da',
    weightDate: '2019-11-29',
    weightKilograms: '85.9',
    fatPercent: '15.4',
    weightBone: '3.6',
    waterPercent: '56.1',
    weightMuscle: '69.1',
    bellyIndex: '5.5',
    _createdOn: '2019-12-02T07:44:06.012Z',
  },
  {
    _id: '5dd7b2d0bbdddc001706336e',
    weightDate: '2019-11-22',
    weightKilograms: '85.1',
    fatPercent: '15.7',
    weightBone: '3.5',
    waterPercent: '55.8',
    weightMuscle: '68.2',
    bellyIndex: '5.5',
    _createdOn: '2019-11-22T10:05:04.894Z',
  },
  {
    _id: '5dd6ea81337c2b0017b1dc4e',
    weightDate: '2019-11-21',
    weightKilograms: '84.7',
    fatPercent: '14.9',
    weightBone: '3.6',
    waterPercent: '56.3',
    weightMuscle: '68.6',
    bellyIndex: '5.0',
    _createdOn: '2019-11-21T19:50:25.832Z',
  },
  {
    _id: '5dd3b9812e6feb00170736dc',
    weightDate: '2019-11-19',
    weightKilograms: '85.8',
    fatPercent: '15.1',
    weightBone: '3.6',
    waterPercent: '56.2',
    weightMuscle: '69.2',
    bellyIndex: '5.0',
    _createdOn: '2019-11-19T09:44:33.439Z',
  },
  {
    _id: '5dd0cb9ebd3752001749a6b6',
    weightDate: '2019-11-17',
    weightKilograms: '85.9',
    fatPercent: '13.5',
    weightBone: '3.7',
    waterPercent: '57.3',
    weightMuscle: '70.7',
    bellyIndex: '4.5',
    _createdOn: '2019-11-17T04:25:02.757Z',
  },
  {
    _id: '5dcfb80ebd3752001749a508',
    weightDate: '2019-11-16',
    weightKilograms: '83.8',
    fatPercent: '13.4',
    weightBone: '3.6',
    waterPercent: '57.2',
    weightMuscle: '69',
    bellyIndex: '4.5',
    _createdOn: '2019-11-16T08:49:18.792Z',
  },
  {
    _id: '5dce1ed88bb92c001735ca62',
    weightDate: '2019-11-15',
    weightKilograms: '85.8',
    fatPercent: '13.3',
    weightBone: '3.7',
    waterPercent: '57.4',
    weightMuscle: '70.7',
    bellyIndex: '4.5',
    _createdOn: '2019-11-15T03:43:20.287Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9b0',
    weightDate: '2019-11-10',
    weightKilograms: '85.1',
    fatPercent: '12.1',
    weightBone: '3.7',
    waterPercent: '58.4',
    weightMuscle: '71.2',
    bellyIndex: '4.0',
    _createdOn: '2019-11-14T12:50:51.681Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9ae',
    weightDate: '2019-11-03',
    weightKilograms: '85.6',
    fatPercent: '13',
    weightBone: '3.7',
    waterPercent: '57.7',
    weightMuscle: '70.8',
    bellyIndex: '4.5',
    _createdOn: '2019-11-14T12:50:51.680Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9af',
    weightDate: '2019-11-08',
    weightKilograms: '85.7',
    fatPercent: '14.9',
    weightBone: '3.6',
    waterPercent: '56.3',
    weightMuscle: '69.3',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.680Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9ac',
    weightDate: '2019-11-01',
    weightKilograms: '84.7',
    fatPercent: '13.2',
    weightBone: '3.6',
    waterPercent: '57.4',
    weightMuscle: '69.9',
    bellyIndex: '4.5',
    _createdOn: '2019-11-14T12:50:51.679Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9ad',
    weightDate: '2019-11-02',
    weightKilograms: '85',
    fatPercent: '12.6',
    weightBone: '3.7',
    waterPercent: '57.9',
    weightMuscle: '70.6',
    bellyIndex: '4.5',
    _createdOn: '2019-11-14T12:50:51.679Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9a9',
    weightDate: '2019-10-26',
    weightKilograms: '84.6',
    fatPercent: '14.2',
    weightBone: '3.6',
    waterPercent: '56.9',
    weightMuscle: '69',
    bellyIndex: '4.5',
    _createdOn: '2019-11-14T12:50:51.678Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9aa',
    weightDate: '2019-10-29',
    weightKilograms: '85.5',
    fatPercent: '13.2',
    weightBone: '3.7',
    waterPercent: '57.5',
    weightMuscle: '70.5',
    bellyIndex: '4.5',
    _createdOn: '2019-11-14T12:50:51.678Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9ab',
    weightDate: '2019-10-31',
    weightKilograms: '84.9',
    fatPercent: '14.1',
    weightBone: '3.6',
    waterPercent: '56.8',
    weightMuscle: '69.3',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.678Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9a5',
    weightDate: '2019-10-22',
    weightKilograms: '87.3',
    fatPercent: '13.3',
    weightBone: '3.7',
    waterPercent: '57.8',
    weightMuscle: '72',
    bellyIndex: '4.5',
    _createdOn: '2019-11-14T12:50:51.677Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9a6',
    weightDate: '2019-10-23',
    weightKilograms: '86.2',
    fatPercent: '12.4',
    weightBone: '3.7',
    waterPercent: '58.4',
    weightMuscle: '71.8',
    bellyIndex: '4.0',
    _createdOn: '2019-11-14T12:50:51.677Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9a7',
    weightDate: '2019-10-24',
    weightKilograms: '85.2',
    fatPercent: '16.2',
    weightBone: '3.5',
    waterPercent: '55.6',
    weightMuscle: '67.9',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.677Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9a8',
    weightDate: '2019-10-25',
    weightKilograms: '84.6',
    fatPercent: '13.7',
    weightBone: '3.6',
    waterPercent: '57.2',
    weightMuscle: '69.4',
    bellyIndex: '4.5',
    _createdOn: '2019-11-14T12:50:51.677Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9a4',
    weightDate: '2019-10-21',
    weightKilograms: '86.6',
    fatPercent: '10.9',
    weightBone: '3.8',
    waterPercent: '59.7',
    weightMuscle: '73.4',
    bellyIndex: '3.5',
    _createdOn: '2019-11-14T12:50:51.676Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9a2',
    weightDate: '2019-10-18',
    weightKilograms: '84.9',
    fatPercent: '15',
    weightBone: '3.6',
    waterPercent: '56.3',
    weightMuscle: '68.6',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.676Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9a3',
    weightDate: '2019-10-19',
    weightKilograms: '84.6',
    fatPercent: '13.8',
    weightBone: '3.6',
    waterPercent: '57.2',
    weightMuscle: '69.4',
    bellyIndex: '4.5',
    _createdOn: '2019-11-14T12:50:51.676Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9a1',
    weightDate: '2019-10-17',
    weightKilograms: '86',
    fatPercent: '15.4',
    weightBone: '3.6',
    waterPercent: '56.2',
    weightMuscle: '69.2',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.675Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c9a0',
    weightDate: '2019-10-16',
    weightKilograms: '84.3',
    fatPercent: '12.8',
    weightBone: '3.6',
    waterPercent: '57.8',
    weightMuscle: '69.9',
    bellyIndex: '4.0',
    _createdOn: '2019-11-14T12:50:51.675Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c99f',
    weightDate: '2019-10-15',
    weightKilograms: '87',
    fatPercent: '15.8',
    weightBone: '3.7',
    waterPercent: '57.8',
    weightMuscle: '70.5',
    bellyIndex: '3.5',
    _createdOn: '2019-11-14T12:50:51.675Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c99d',
    weightDate: '2019-10-11',
    weightKilograms: '87.2',
    fatPercent: '13.6',
    weightBone: '3.7',
    waterPercent: '57.4',
    weightMuscle: '71.7',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.674Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c99e',
    weightDate: '2019-10-13',
    weightKilograms: '85.4',
    fatPercent: '14.3',
    weightBone: '3.6',
    waterPercent: '56.7',
    weightMuscle: '69.5',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.674Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c99c',
    weightDate: '2019-10-09',
    weightKilograms: '86.3',
    fatPercent: '14.8',
    weightBone: '3.6',
    waterPercent: '56.5',
    weightMuscle: '69.9',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.673Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c99a',
    weightDate: '2019-10-07',
    weightKilograms: '86.4',
    fatPercent: '14.1',
    weightBone: '3.6',
    waterPercent: '56.7',
    weightMuscle: '70.3',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.672Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c999',
    weightDate: '2019-10-06',
    weightKilograms: '86.6',
    fatPercent: '137',
    weightBone: '3.7',
    waterPercent: '57.2',
    weightMuscle: '71',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.672Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c99b',
    weightDate: '2019-10-08',
    weightKilograms: '86.8',
    fatPercent: '13.9',
    weightBone: '3.7',
    waterPercent: '57.1',
    weightMuscle: '71.1',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.672Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c998',
    weightDate: '2019-10-05',
    weightKilograms: '87',
    fatPercent: '15',
    weightBone: '3.6',
    waterPercent: '56.4',
    weightMuscle: '70.3',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.671Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c997',
    weightDate: '2019-10-04',
    weightKilograms: '87.2',
    fatPercent: '14.4',
    weightBone: '3.7',
    waterPercent: '56.8',
    weightMuscle: '70.9',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.671Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c996',
    weightDate: '2019-10-03',
    weightKilograms: '85.8',
    fatPercent: '13.6',
    weightBone: '3.7',
    waterPercent: '57.3',
    weightMuscle: '70.5',
    bellyIndex: '4.5',
    _createdOn: '2019-11-14T12:50:51.671Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c993',
    weightDate: '2019-09-30',
    weightKilograms: '85.9',
    fatPercent: '14',
    weightBone: '3.6',
    waterPercent: '56.6',
    weightMuscle: '70.3',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.670Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c995',
    weightDate: '2019-10-02',
    weightKilograms: '85.8',
    fatPercent: '14.1',
    weightBone: '3.6',
    waterPercent: '56.9',
    weightMuscle: '70.1',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.670Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c992',
    weightDate: '2019-09-29',
    weightKilograms: '87.5',
    fatPercent: '13.5',
    weightBone: '3.7',
    waterPercent: '57.1',
    weightMuscle: '72',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.670Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c994',
    weightDate: '2019-10-01',
    weightKilograms: '85.7',
    fatPercent: '14.4',
    weightBone: '3.6',
    waterPercent: '56.7',
    weightMuscle: '69.8',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.670Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c990',
    weightDate: '2019-09-24',
    weightKilograms: '86.4',
    fatPercent: '14',
    weightBone: '3.7',
    waterPercent: '56.6',
    weightMuscle: '70.7',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.669Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c991',
    weightDate: '2019-09-25',
    weightKilograms: '85.4',
    fatPercent: '14.4',
    weightBone: '3.6',
    waterPercent: '56.3',
    weightMuscle: '69.5',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.669Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c98f',
    weightDate: '2019-09-22',
    weightKilograms: '85.9',
    fatPercent: '13.6',
    weightBone: '3.7',
    waterPercent: '56.9',
    weightMuscle: '70.6',
    bellyIndex: '5.0',
    _createdOn: '2019-11-14T12:50:51.669Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c98c',
    weightDate: '2019-09-19',
    weightKilograms: '86.9',
    fatPercent: '15.1',
    weightBone: '3.6',
    waterPercent: '56',
    weightMuscle: '70.2',
    bellyIndex: '6.0',
    _createdOn: '2019-11-14T12:50:51.668Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c98e',
    weightDate: '2019-09-21',
    weightKilograms: '85.8',
    fatPercent: '14',
    weightBone: '3.6',
    waterPercent: '56.5',
    weightMuscle: '70.2',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.668Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c98d',
    weightDate: '2019-09-20',
    weightKilograms: '86.5',
    fatPercent: '14.2',
    weightBone: '3.7',
    waterPercent: '56.5',
    weightMuscle: '70.5',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.668Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c989',
    weightDate: '2019-09-15',
    weightKilograms: '87.2',
    fatPercent: '14.2',
    weightBone: '3.7',
    waterPercent: '56.5',
    weightMuscle: '71.1',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.667Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c98b',
    weightDate: '2019-09-18',
    weightKilograms: '86.4',
    fatPercent: '13.8',
    weightBone: '3.7',
    waterPercent: '56.8',
    weightMuscle: '70.8',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.667Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c98a',
    weightDate: '2019-09-17',
    weightKilograms: '86.9',
    fatPercent: '14.9',
    weightBone: '3.6',
    waterPercent: '56.1',
    weightMuscle: '70.4',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.667Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c987',
    weightDate: '2019-09-13',
    weightKilograms: '86.7',
    fatPercent: '14.5',
    weightBone: '3.7',
    waterPercent: '56.3',
    weightMuscle: '70.5',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.666Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c988',
    weightDate: '2019-09-14',
    weightKilograms: '86.4',
    fatPercent: '14.2',
    weightBone: '3.7',
    waterPercent: '56.5',
    weightMuscle: '70.5',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.666Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c986',
    weightDate: '2019-09-12',
    weightKilograms: '87.4',
    fatPercent: '14.4',
    weightBone: '3.7',
    waterPercent: '56.5',
    weightMuscle: '71.2',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.666Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c984',
    weightDate: '2019-09-10',
    weightKilograms: '88.1',
    fatPercent: '13.7',
    weightBone: '3.7',
    waterPercent: '57',
    weightMuscle: '71.3',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.665Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c983',
    weightDate: '2019-09-09',
    weightKilograms: '89',
    fatPercent: '13.3',
    weightBone: '3.8',
    waterPercent: '57.4',
    weightMuscle: '73.3',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.665Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c985',
    weightDate: '2019-09-11',
    weightKilograms: '87.2',
    fatPercent: '15.1',
    weightBone: '3.7',
    waterPercent: '56',
    weightMuscle: '70.5',
    bellyIndex: '6',
    _createdOn: '2019-11-14T12:50:51.665Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c982',
    weightDate: '2019-09-08',
    weightKilograms: '87.3',
    fatPercent: '14.2',
    weightBone: '3.7',
    waterPercent: '56.6',
    weightMuscle: '71.3',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.665Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c97f',
    weightDate: '2019-09-05',
    weightKilograms: '86.4',
    fatPercent: '15.7',
    weightBone: '3.6',
    waterPercent: '55.5',
    weightMuscle: '69.3',
    bellyIndex: '6',
    _createdOn: '2019-11-14T12:50:51.664Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c980',
    weightDate: '2019-09-06',
    weightKilograms: '87',
    fatPercent: '15.1',
    weightBone: '3.6',
    waterPercent: '55.9',
    weightMuscle: '70.2',
    bellyIndex: '6',
    _createdOn: '2019-11-14T12:50:51.664Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c981',
    weightDate: '2019-09-07',
    weightKilograms: '87.3',
    fatPercent: '15',
    weightBone: '3.7',
    waterPercent: '56',
    weightMuscle: '70.6',
    bellyIndex: '6',
    _createdOn: '2019-11-14T12:50:51.664Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c97c',
    weightDate: '2019-09-02',
    weightKilograms: '87.5',
    fatPercent: '12.7',
    weightBone: '3.8',
    waterPercent: '57.7',
    weightMuscle: '72.6',
    bellyIndex: '5',
    _createdOn: '2019-11-14T12:50:51.663Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c97d',
    weightDate: '2019-09-03',
    weightKilograms: '87.8',
    fatPercent: '14.9',
    weightBone: '3.7',
    waterPercent: '56.2',
    weightMuscle: '71.1',
    bellyIndex: '6',
    _createdOn: '2019-11-14T12:50:51.663Z',
  },
  {
    _id: '5dcd4dab8bb92c001735c97e',
    weightDate: '2019-09-04',
    weightKilograms: '86.6',
    fatPercent: '14',
    weightBone: '3.7',
    waterPercent: '56.6',
    weightMuscle: '70.8',
    bellyIndex: '5.5',
    _createdOn: '2019-11-14T12:50:51.663Z',
  },
];

weightSeries.forEach((weight) => {
  const url = 'http://localhost:9000/.netlify/functions/weight-create';
  fetch(url, {
    // mode: 'cors',
    headers: {
      Accept: 'application/json',
      //   Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(weight),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // TODO: updateChart();
    })
    .catch((err) => {
      console.log(err);
    });
});
