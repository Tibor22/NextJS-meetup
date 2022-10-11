import MeetupDetail from '../components/meetups/MeetupDetail';

export default function MeetupDetails({
	image,
	title,
	address,
	description,
	id,
}) {
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

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
			{
				params: {
					meetupId: 'm2',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;
	console.log(meetupId);

	return {
		props: {
			meetupData: {
				image:
					'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				title: 'First meetup',
				address: 'Some street 3, some city',
				description: 'This is pur first meetup',
				id: meetupId,
			},
		},
	};
}
