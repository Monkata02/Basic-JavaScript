let worker = result({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
);

expect(worker.weight).to.equal(80, "Worker weight was modified.");
expect(worker.experience).to.equal(1, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(8, "Worker wasn't given enough water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true.");
