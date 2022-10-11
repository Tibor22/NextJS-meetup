import MeetupDetail from '../components/meetups/MeetupDetail';

export default function MeetupDetails() {
	return (
		<>
			<MeetupDetail
				image={
					'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
				}
				title={'First meetup'}
				address={'Some street 3, some city'}
				description={'This is pur first meetup'}
			/>
		</>
	);
}
