require('dotenv').config();
const { CommentStream } = require('snoostorm');
const Snoowrap = require('snoowrap');

const client = new Snoowrap({
	userAgent: 'Jojo comment bot',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS
});

const comments = new CommentStream(client, { 
    subreddit: 'testingground4bots', 
    limit: 10, 
    pollTime: 10000 
});

const start = () => {
    console.log('🗿 Bot started 🗿')
    try {
        comments.on('item', (item) => {
            if (item.body.includes('🗿')) {
                item.reply('Yo, Angelo!');
                console.log(`🗿 Comment Replied to ${item.author.name} at ${new Date().toLocaleTimeString()} 🗿`);
            }
        });
    } catch (error) {
        console.error(error)
    }
}

start();