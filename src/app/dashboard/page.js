
'use client'
import React from 'react';

import { useRouter } from 'next/navigation';
const page = () => {
	const router = useRouter();
	const Logout = async ()=>{
		const res = await fetch ('/login');
		const json= await res.json();

		if(json['status'] ===true){
			router.replace('/login');
		}
	}
	return (
		<div>

			<button onChange={Logout}>Logout</button>
		</div>
	);
};

export default page;