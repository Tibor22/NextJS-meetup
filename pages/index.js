import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A first meetup',
		image:
			'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		address: 'London Road 3, Swansea',
		description: 'THis is the first meetup',
	},
	{
		id: 'm2',
		title: 'A second meetup',
		image:
			'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		address: 'London Road 33, Crawley',
		description: 'THis is the third meetup',
	},

	{
		id: 'm3',
		title: 'A third meetup',
		image:
			'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		address: 'London Road 5, London',
		description: 'THis is the first meetup',
	},
];
function HomePage({ meetups }) {
	return <MeetupList meetups={meetups} />;
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;
// 	return {
// 		props: { meetups: DUMMY_MEETUPS },
// 	};
// }

// has to be called getStaticProps this is a reserved namespace
export async function getStaticProps() {
	//fetch data from an API

	// always return an object
	return {
		// has to be called props
		props: {
			meetups: DUMMY_MEETUPS,
		},
		// re build this page at every second
		revalidate: 1,
	};
}

export default HomePage;
