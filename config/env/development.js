'use strict';

module.exports = {
	db: 'mongodb://localhost/mean-dev',
	app: {
		title: 'MEAN.JS - Dev Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '1530061053898588',
		clientSecret: process.env.FACEBOOK_SECRET || '58eeb46041eb9fbce84fc75d2eb78ef1',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '820593985540-2c7lsm6i24cieaqfrktch1f1kmoqore8.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'p5OVgMcFEQNfXNHpjmZtNd7y',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '2f2ce1f9-c1e3-4fa0-bb41-a6d3ec7c84ab',
		clientSecret: process.env.LINKEDIN_SECRET || 'a9ddc085-77f4-46c4-b7d2-93c3dbd12757',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || '56f56d785cc99754d717',
		clientSecret: process.env.GITHUB_SECRET || '02c1707b50d68b67a5ccade81523cc5a18fb9993',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
