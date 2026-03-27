const http = require('http');

const BASE_PATH = '/api/auth';
const testUser = {
    email: `test_${Date.now()}@example.com`,
    password: 'Password123!'
};

function postRequest(path, data) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(JSON.stringify(data))
            }
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', hunk => body += hunk);
            res.on('end', () => {
                if (res.statusCode >= 400) {
                    reject({ status: res.statusCode, body });
                } else {
                    resolve({ status: res.statusCode, body: JSON.parse(body) });
                }
            });
        });

        req.on('error', reject);
        req.write(JSON.stringify(data));
        req.end();
    });
}

async function runTests() {
    console.log('--- STARTING AUTH ROUTE CHECKS ---');

    try {
        console.log(`[TEST 1] Testing Signup for: ${testUser.email}...`);
        const signupRes = await postRequest(`${BASE_PATH}/signup`, testUser);
        console.log('✅ Signup Response:', JSON.stringify(signupRes.body, null, 2));

        console.log('[TEST 2] Testing Email Login...');
        const loginRes = await postRequest(`${BASE_PATH}/login-email`, testUser);
        console.log('✅ Login Response (Received Token):', loginRes.body.token ? 'YES' : 'NO');
        console.log('   Message:', loginRes.body.message);

        console.log('[TEST 3] Testing Google Login flow (Backend part)...');
        const googleRes = await postRequest(`${BASE_PATH}/login-google`, { email: testUser.email });
        console.log('✅ Google Login Response:', JSON.stringify(googleRes.body, null, 2));

    } catch (err) {
        console.error('❌ TEST FAILED');
        if (err.status) {
            console.error('Status:', err.status);
            console.error('Response:', err.body);
        } else {
            console.error(err);
        }
    }
    console.log('--- CHECKS FINISHED ---');
}

runTests();
