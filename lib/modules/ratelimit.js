module.exports = {

    consume: function(options) {
      if (app.rateLimiter) {
        return app.rateLimiter.consume(options.key, options.points).catch(() => {
          if (options.throw) {
            throw new Error('rate_limit_exceeded');
          } else {
            const reset = Math.ceil(rateLimiterRes.msBeforeNext / 1000);
            this.res.set('RateLimit-Policy', `${config.rateLimit.points};w=${config.rateLimit.duration}`);
            this.res.set('RateLimit', `limit=${config.rateLimit.points}, remaining=${rateLimiterRes.remainingPoints}, reset=${reset}`);
            this.res.set('Retry-After', reset);
            if (this.req.is('json')) {
              this.res.status(429).json({ error: 'Too Many Requests' });
            } else {
              this.res.status(429).send('Too Many Requests');
            }
          }
        });
      }
    },

};